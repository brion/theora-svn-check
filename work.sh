#!/bin/sh

function encode {
	ENCODER="$1"
	INPUT="$2"
	OUTPUT="$3"
	if [ -f "$OUTPUT" ]
	then
		echo "skipping already-done $OUTPUT"
	else
		"$ENCODER" -V 512 --keyint 128 --buf-delay 256 -x 640 -y 360 -o "$OUTPUT" "$INPUT"
	fi
}

mkdir stock
mkdir svn

for x in *.ogv *.webm
do
  encode ffmpeg2theora "$x" "stock/$x.360p.ogv"
  encode /opt/theora/bin/ffmpeg2theora "$x" "svn/$x.360p.ogv"
done
