#include <iostream>
#include <vector>
using namespace std;

void helloWorld()
{
    cout << "Hello World\n";
}

void print(int a)
{
    cout << "Printing value: " << a << '\n';
}

void forEach(const vector<int> &v, void (*func)(int))
{
    for (int val : v)
        func(val);
}

int main()
{

    auto function = helloWorld;
    function();

    void (*a)();
    a = helloWorld;
    void (*b)() = helloWorld;
    a();

    typedef void (*f)();
    f g = helloWorld;
    g();

    typedef void (*h)(int);
    h func = print;
    func(5);
    func(15);

    vector<int> v = {1, 2, 5, 7, 4};
    forEach(v, print);

    return 0;
}