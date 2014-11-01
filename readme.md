
to build ffmpeg2theora from git:


# with theora default
scons install prefix=/opt/ffmpeg2theora static=1

# with theora SVN
PKG_CONFIG_PATH=/opt/theora/lib/pkgconfig:/usr/lib/pkgconfig scons install prefix=/opt/theora static=1


