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
cd opencv/
mkdir build

cmake -D CMAKE_BUILD_TYPE=RELEASE \
    -D CMAKE_INSTALL_PREFIX=/usr/local \
    -D WITH_CUDA=OFF \
    -D BUILD_opencv_cudacodec=OFF \
    -D CUDA_GENERATION=Auto \
    -D WITH_CUBLAS=OFF \
    -D WITH_TBB=ON \
    -D WITH_V4L=ON \
    -D WITH_QT=OFF \
    -D WITH_OPENGL=OFF \
    -D BUILD_PERF_TESTS=OFF \
    -D BUILD_TESTS=OFF \
    -D BUILD_TIFF=ON \
    -D ENABLE_CXX11=ON \
    -D WITH_PROTOBUF=ON \
    -D BUILD_opencv_legacy=OFF \
    -D ENABLE_PRECOMPILED_HEADERS=OFF \
    -D INSTALL_PYTHON_EXAMPLES=OFF \
    -D INSTALL_C_EXAMPLES=OFF \
    -D OPENCV_EXTRA_MODULES_PATH=/home/vgrl/opencv_contrib/modules \
    -D CUDA_NVCC_FLAGS="-D_FORCE_INLINES" ..
    
    
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