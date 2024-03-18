// Online C++ compiler to run C++ program online
#include <bits/stdc++.h>
using namespace std;
class Entity
{
private:
    vector<int> v;
    int c;

public:
    int a, b;
    Entity() : a(1), b(0), c(13)
    {
        cout << '1' << a << b << c << endl;
    }
    Entity(const int &a) : a(a), b(2), c(3)
    {
        cout << '2' << a << b << c << endl;
    }
    Entity(const vector<int> &vec) : v(vec)
    {
        cout << v[0] << endl;
    }
};

void print(const Entity *e)
{
    cout << "This is an Entity" << e->a << (*e).b << endl;
}

int main()
{
    // new keyword allocates memory in heap whose address is saved in stack so we get a pointer by using new keyword the address pointed by this pointer stores the actual data
    int *arr = new int[10];
    arr[1] = 3;
    arr[9] = 7;
    int *a = new int(7); // creating an int with value equals to 7
    *a = 9;
    cout << *a << endl;
    for (int i = 0; i < 10; i++)
        cout << arr[i] << ' ';
    Entity *e1 = new Entity(3); // creating an Entity object with constructor with one int argument
    print(e1);
    Entity *e2 = new Entity[3]; // creating an array of Entity oblects with default constructor

    print(e2);
    print(e2 + 1);
    print(e2 + 2);

    Entity *e3 = new Entity[2]{3, 13}; // creating an Entity array with constructor with one int argument

    print(e3);
    print(e3 + 1);

    delete e1, a;
    delete[] arr, e2, e3;

    return 0;
}