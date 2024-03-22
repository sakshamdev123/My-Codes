#include <string>
#include <sstream>
using namespace std;

class Identifier
{
public:
    Identifier(const string &name, const char *type = "Unknown", const int *address = NULL, const int &value = 0) : currentCount(count), name(name), type(type), address(address), value(value)
    {
        count++;
    }

    string getInfo() const
    {
        string a, b;
        b = name;
        b.resize(10, ' ');
        a = b;
        b = type;
        b += to_string(currentCount);
        b.resize(10, ' ');
        a += "| ";
        a += b;
        stringstream s;
        s << address;
        b = s.str();
        b.resize(10, ' ');
        a += "| ";
        a += b;
        b = to_string(value);
        b.resize(10, ' ');
        a += "| ";
        a += b;
        a += "|\n";
        return a;
    }

private:
    static int count;
    int currentCount;
    string name;
    const char *type;
    const int *address;
    int value;
};

class Operator
{
public:
    Operator(const string &name, const char &type) : name(name), type(type) {}

    string getInfo() const
    {
        string a, b;
        b = type;
        b.resize(10, ' ');
        a = b;
        b = name;
        b.resize(10, ' ');
        a += "| ";
        a += b;
        a += "|     --    |    --     |\n";
        return a;
    }

private:
    string name;
    const char type;
};

class Terminator
{
public:
    Terminator() {}

    string getInfo() const
    {
        string a, b;
        b = type;
        b.resize(10, ' ');
        a = b;
        b = name;
        b.resize(10, ' ');
        a += "| ";
        a += b;
        a += "|     --    |    --     |\n";
        return a;
    }

private:
    string name = "End";
    const char *type = ";";
};

class Container
{
public:
    Container(Identifier *id) : id(id), op(NULL), term(NULL) {}
    Container(Operator *op) : id(NULL), op(op), term(NULL) {}
    Container(Terminator *term) : id(NULL), op(NULL), term(term) {}

    const char get()
    {
        if (id)
            return 'i';
        else if (op)
            return 'o';
        return 't';
    }

    Identifier *getIdentifier()
    {
        return id;
    }

    Operator *getOperator()
    {
        return op;
    }

    Terminator *getTerminator()
    {
        return term;
    }

private:
    Identifier *id;
    Operator *op;
    Terminator *term;
};

class Lexer
{
public:
    Identifier *createIdentifier(const string &name, const int *address, const int &value, const char *type)
    {
        Identifier *identifier = new Identifier(name, type, address, value);
        return identifier;
    }

    Operator *createOperator(const string &name, const char &type)
    {
        Operator *operator_ = new Operator(name, type);
        return operator_;
    }

    Terminator *createTerminator()
    {
        Terminator *terminator = new Terminator();
        return terminator;
    }
};

int Identifier::count = 1;