#include <iostream>
#include <cstdarg>
#include <algorithm>
using namespace std;

template <class T>
T operate(int count, T (*operation)(T, T), ...)
{
    T ans;
    va_list l;
    va_start(l, operation);
    ans = va_arg(l, T);
    for (int i = 1; i < count; i++)
        ans = operation(ans, va_arg(l, T));
    va_end(l);
    return ans;
}

template <class T>
T mini(T a, T b) { return min(a, b); }

template <class T>
T maxi(T a, T b) { return max(a, b); }

template <class T>
T gcd(T a, T b) { return __gcd(a, b); }

int main()
{
    cout << operate<int>(3, mini<int>, 5, 3, 9) << endl;
    cout << operate<int>(4, maxi<int>, 7, 12, 4, 8) << endl;
    cout << operate<int>(3, gcd<int>, 18, 12, 3) << endl;

    return 0;
}
