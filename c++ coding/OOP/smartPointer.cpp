#include <iostream>
#include <memory>
using namespace std;

class Entity
{
public:
    Entity()
    {
        cout << "Entity created\n";
    }
    ~Entity()
    {
        cout << "Entity destroyed\n";
    }
    void print() { cout << "Printing ...\n"; }
};

int main()
{
    {
        unique_ptr<Entity> up = make_unique<Entity>(/*argument for constructor*/);
    } // upon exiting the scope unique pointer autiomatically destroyes the object and frees the memory
    unique_ptr<Entity> up1(new Entity);
    // unique_ptr<Entity> up2 =up1; // This code will not work
    // unique pointer are unique. i.e., we can't copy them as if one of them is destroyed then other one will refer an invalid memory location
    up1->print();

    // shared pointer also destroyes the object upon exiting the scope but multiple shared pointer can point to same object when each of them is out of scope then object gets destroyed
    // shared pointer works using reference counting. every time a shared pointer is created it increases the reference counter by 1 and when it reches end of the scope it decreases it by 1.
    // when reference counter reaches 0 object is destroyed
    {
        shared_ptr<Entity> sp1;
        {
            shared_ptr<Entity> sp = make_shared<Entity>();
            sp1 = sp;
        } // sp is out of scope but object refered by sp is not yed destroyed
    }     // now object gets destroyed

    // weak pointer can also refer to same object as shared pointer but it can't stop object from being destroyed after it reaches end of the scope

    // weak pointer does not increases reference counter

    // we can access object from weak pointer if it is not destroyed
    {
        weak_ptr<Entity> sp1;
        {
            shared_ptr<Entity> sp = make_shared<Entity>();
            sp1 = sp;
        } // sp is out of scope and object refered by sp is destroyed
    }     // now weak pointer rever to invalid location

    return 0;
}