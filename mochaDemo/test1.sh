#!/bin/bash
# just for funny
location="test"
filename="hello-test.js"

if [ -e $location ]
then
    echo "test dir exist"
else
    mkdir test
fi

if [ -f $location/$filename ]
then
    echo "hello-test.js exist"
else
    mv hello-test.js test/
fi

# mkdir test
# mv hello-test.js test/

