#include <iostream>
using namespace std;

class Entity
{
public:
    // string getName() { return "AI"; }
    virtual string getName() { return "AI"; }
};

class Player : public Entity
{
private:
    string name;

public:
    Player(const string &s) : name(s) {}
    // string getName() { return name; }
    string getName() override { return name; }
};

void printName(Entity *ent) { cout << ent->getName() << endl; }

int main()
{
    Entity e;
    // cout<< e.getName()<<endl;
    Player p("ML");
    // cout<< p.getName() <<endl;
    Entity *entity = &p;
    // cout<< entity->getName() <<endl;
    printName(&e);
    printName(&p);
    printName(entity);
}