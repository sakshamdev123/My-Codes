// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
class Entity
{
private:
    int a, b;
    vector<int> v;

public:
    int c;
    Entity() : a(1), b(0), c(13)
    {
        cout << '1' << a << b << c << endl;
    }
    explicit Entity(const int &a) : a(a), b(2), c(3)
    {
        cout << '2' << a << b << c << endl;
    }
    Entity(const vector<int> &vec) : v(vec)
    {
        cout << v[0] << endl;
    }
};

void print(const Entity &e)
{
    cout << "This is an Entity" << endl;
}

int main()
{
    vector<int> v = {6, 45, 3};
    print(v); // instead of instantiating and then calling print we can directly call print with construcor arguments
    // compiler will call coonstructor automatically with given argument and then call print
    // print(5); This code will not work because Entity constructor with one int argument is explicit
    // That means we are telling compiler to not implicitely convert this into Entity object
    print((Entity)5); // We can get around this by manually casting into Entity object and calling Entity constructor
    print(Entity(5)); //This is also the same
    return 0;
}