#include <iostream>
using namespace std;

class Entity
{
private:
    int a;

public:
    void print() { cout << "Hello\n"; }
};

class ScopedPtr
{
private:
    Entity *e;

public:
    ScopedPtr(Entity *a) : e(a)
    {
    }
    ~ScopedPtr()
    {
        delete e;
    }
    // Entity* getObject() { return e; }
    Entity *operator->() { return e; }
};

struct Vector3
{
    float a, b, c;
};

int main()
{
    {
        ScopedPtr entity = new Entity();
        // entity.getObject()->print(); // without arrow operator overloading
        entity->print();
    }
    size_t offset1 = (size_t) & ((Vector3 *)nullptr /*or 0*/)->a;
    size_t offset2 = (size_t) & ((Vector3 *)0)->b;
    size_t offset3 = (size_t) & ((Vector3 *)nullptr)->c;
    cout << offset1 << '\n';
    cout << offset2 << '\n';
    cout << offset3 << '\n';
    return 0;
}