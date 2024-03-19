#include <iostream>
#include <cstring>
using namespace std;

class String
{
private:
    char *m_Buffer;
    unsigned int m_Size;

public:
    String(const char *string)
    {
        m_Size = strlen(string);
        m_Buffer = new char[m_Size + 1];
        memcpy(m_Buffer, string, m_Size);
        m_Buffer[m_Size] = 0;
        cout << "string created\n";
    }

    // default copy constructor
    // String(const String& string2)
    // {
    //     memcpy(this,&string2,sizeof(String));
    // }

    String(const String &string2) // = delete // for disabling copying. i,e. String str2 = str1 disabled as in unique pointer
        : m_Size(string2.m_Size)
    {
        m_Buffer = new char[m_Size + 1];
        memcpy(m_Buffer, string2.m_Buffer, m_Size + 1);
        cout << "string created using copy constructor\n";
    }

    ~String()
    {
        delete[] m_Buffer;
        cout << "string deleted\n";
    }

    char &operator[](unsigned int index) const
    {
        return m_Buffer[index];
    }

    friend ostream &operator<<(ostream &stream, const String &string);
};

ostream &operator<<(ostream &stream, const String &string)
{
    stream << string.m_Buffer;
    return stream;
}

int main()
{
    {
        String str = "Test";
        cout << str[2] << endl;
        str[1] = 'a';
        cout << str << endl;

        String str2 = str;
        str[3] = 'r';
        // change in str now does not affect str2 which means str2 is not a shallow copy of str but a deep copy (they are copied but are at diffrect memory location)
        // without the defined copy constructor change in str affect str2 as they both refer to same memory location
        // after reaching end of scope both str and str2 call destructor and wanting to free same memory location
        // after one of them executes the program will crash as other String object will try to free(delete) a memory location which is already deleted
        cout << str2 << endl;
    }

    return 0;
}