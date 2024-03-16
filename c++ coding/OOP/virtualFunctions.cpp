#include <bits/stdc++.h>
using namespace std;

class Entity
{
private:
    string entity_Name;

public:
    virtual string getName() { return "AI"; }
};

class Player : public Entity
{
private:
    string name;

public:
    Player(const string &s) : name(s) {}
    string getName() override { return name; }
};

void printName(Entity *ent)
{
    cout << ent->getName() << endl;
}

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