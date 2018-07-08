#include <iostream>
#include <emscripten/emscripten.h>

int main() 
{
    printf("Hello, World!\n");
}

// prevent C++ name mangling
extern "C" {

    int foo() {
        return 50;
    }

    int bar() {
        return 100;
    }

    int baz() {
        return 200;
    }

}
