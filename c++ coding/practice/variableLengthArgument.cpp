#include <iostream>
#include <cstdarg>
using namespace std;

template <class T>
T mini(int count, ...)
{
    T ans;
    va_list l;
    va_start(l, count);
    ans = va_arg(l, T);
    for (int i = 1; i < count; i++)
        ans = min(va_arg(l, T), ans);
    va_end(l);
    return ans;
}

int main()
{
    cout << mini<int>(3, 7, 13, 10);          // min of 3 integer numbers
    cout << mini<double>(3, 7.1, 13.1, 10.5); // min of 3 floating point numbers
}