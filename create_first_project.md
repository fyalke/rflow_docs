## First Project

The goal of this section is provide the user with the basic guidelines for creating the first project in rflow based on an Image Publisher-Subscriber:

### Create Project Directories:
```bash
mkdir my_first_project
cd my_first_project
mkdir include
mkdir src
mkdir build
touch CMakeLists.txt
```

### Create the Image Publisher Application

Create a file named ```img_pub.cpp``` and put it in your ```src``` folder:
```cpp
#include <thread>
#include <chrono>
#include <ctime>

#include "imagestructpublisher.h"

int main (int argc, char *argv [])
{
    ImageStructPublisher img_pub = ImageStructPublisher("tcp://*:5556", "color_image");
    int device_id = 0;
    
    if (argc == 2)
        device_id = std::stoi(argv[1]);
        
    std::cout << "selected cameta device idx: " << device_id << std::endl;
    
    //  Ensure subscriber connection has time to complete
    std::this_thread::sleep_for(std::chrono::seconds(1));

    cv::Mat frame;
    cv::VideoCapture cap(device_id);
    cap.open(device_id);

    if (!cap.isOpened()) {
      std::cerr << "ERROR! Unable to open camera\n";
      return -1;
    }
  
    while (1) {
    	cap >> frame;
	    if (frame.empty()) {
		    std::cerr << "ERROR! empty frame grabbed\n";
		    break;
	    } else {
            Image img;
            img.width = frame.cols;
            img.height = frame.rows;
            img.num_channels = frame.channels();
            img.data = frame.clone();
            img.timestamp = static_cast<long>(std::chrono::seconds(std::time(NULL)).count());
            cv::imwrite("color_image_published.png", img.data);
            img_pub.publish(img);
        }
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
    }
    return 0;
}
```
### Create the Image Subscriber Application

Create a file named ```img_sub.cpp``` and put it in your ```src``` folder:
```cpp
#include "imagestructsubscriber.h"

int main (int argc, char *argv [])
{
    ImageStructSubscriber image_sub = ImageStructSubscriber("tcp://localhost:5556", "color_image", 640, 480, "color");
    int counter = 0;

    while (1) {
        cv::Mat img_received = cv::Mat(640, 480, CV_8UC3);
        img_received = image_sub.getData()->data;
        counter++;
    }
    return 0;
}
```

### Build both Applications:

Your ```CMakeLists.txt``` file should look like the code below:

```cmake
cmake_minimum_required(VERSION 3.10)
project(rflow_img_pub_sub)

set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_COMPILER /usr/bin/g++)

find_library(rflow_LIB librflow.so PATHS $ENV{HOME}/rflow_0_0_1/lib/)
find_package( OpenCV REQUIRED )

include_directories($ENV{HOME}/rflow_0_0_1/include/)
include_directories(include ${OpenCV_INCLUDE_DIRS})

add_executable(img_pub src/img_pub.cpp include)
target_link_libraries(img_pub ${rflow_LIB} zmq ${OpenCV_LIBS}) 

add_executable(img_sub src/img_sub.cpp include)
target_link_libraries(img_sub ${rflow_LIB} zmq ${OpenCV_LIBS}) 
```

Now, you can do:
```bash
cd build
cmake ..
make
```

### Run Image Publisher-Subscriber Applications:

Open one Terminal and launch the publisher app:
```
./my_first_project/build/img_pub
```

Open a second Terminal and launch the subscriber app:
```
./my_first_project/build/img_sub
```



