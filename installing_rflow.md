# rflow

## Robotic Flow (R-Flow):

## install dependencies

### opencv
```
$ sudo apt-get install build-essential cmake git unzip pkg-config
$ sudo apt-get install libjpeg-dev libtiff5-dev
$ sudo apt-get install libavcodec-dev libavformat-dev libswscale-dev libv4l-dev
$ sudo apt-get install libxvidcore-dev libx264-dev
$ sudo apt-get install libgtk-3-dev
$ sudo apt-get install libhdf5-serial-dev graphviz
$ sudo apt-get install libopenblas-dev libatlas-base-dev gfortran
$ sudo apt-get install python3-tk
$ sudo apt-get install python3-dev
```

Get OpenCV 4.6.0 from Official 
```
git clone https://github.com/opencv/opencv
cd opencv
git checkout 4.6.0
cd ..
```
Get extra module from extra
```
git clone https://github.com/opencv/opencv_contrib
cd opencv_contrib
git checkout 4.6.0
```

Install prerequisites:
```
sudo apt install qtbase5-dev python3-numpy
sudo apt install libhdf5-dev
sudo apt install libgtk-3-dev libjpeg-dev libtiff5-dev
sudo apt install libavcodec-dev libavformat-dev libswscale-dev libxine2-dev
sudo apt install libv4l-dev libtbb-dev libfaac-dev libmp3lame-dev libopencore-amrnb-dev libopencore-amrwb-dev libtheora-dev
sudo apt install --assume-yes libvorbis-dev libxvidcore-dev v4l-utils
sudo apt-get install libblas-dev liblapack-dev
sudo apt install libgtkglext1 libgtkglext1-dev
```

Build OpenCV from source:
```
# Install minimal prerequisites (Ubuntu 18.04 as reference)
sudo apt update && sudo apt install -y cmake g++ wget unzip
# Download and unpack sources
wget -O opencv.zip https://github.com/opencv/opencv/archive/4.x.zip
wget -O opencv_contrib.zip https://github.com/opencv/opencv_contrib/archive/4.x.zip
unzip opencv.zip
unzip opencv_contrib.zip
# Create build directory and switch into it
mkdir -p build && cd build
# Configure
cmake -DOPENCV_EXTRA_MODULES_PATH=../opencv_contrib-4.x/modules ../opencv-4.x
# Build
cmake --build .
    
    
cd build
make -j $(($(nproc) + 1))
sudo make install
sudo ldconfig
```

## rflow
```
sudo apt install libzmq3-dev

then, in your source code, when using this library include the following header files:
 -> zmq.hpp
 -> zmq_addon.hpp
 -> zhelpers.hpp
```

## pyrflow

Tested with Python 3.10.12
```
sudo apt install python3-pip
```

```
numpy==1.24.3
pybullet==3.2.5
opencv-python==4.7.0.72
opencv-contrib-python==4.7.0.72
pyzmq==25.1.0
PySide6==6.4.2
``