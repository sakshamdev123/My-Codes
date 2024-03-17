#include <iostream>
#include <string>
using namespace std;

class Print
{
public:
    virtual string getClassName() = 0; //pure virtual funtion is made by initializing it equals to 0
};

class Entity : public Print
{
public:
    virtual string getName() { return "AI"; }
    string getClassName() override { return "Entity"; }
};

class Player : public Entity
{
private:
    string name;

public:
    Player(const string &s) : name(s) {}
    string getName() override { return name; }
    string getClassName() override { return "Player"; }
};

void printName(Entity *e) { cout << e->getName() << endl; }
void printObj(Print *p) { cout << p->getClassName() << endl; }

int main()
{
    Entity *e = new Entity;
    Player *p = new Player("ChatGPT");
    printObj(e);
    printObj(p);
    delete e;
    delete p;
}