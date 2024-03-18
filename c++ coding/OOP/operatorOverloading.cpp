#include <iostream>
using namespace std;

class Vector
{
public:
    int x, y;
    Vector(const int &x, const int &y) : x(x), y(y)
    {
        cout << "Vector created. Coordinates of vector are: (" << x << " , " << y << ')' << endl;
    }
    // Method 1
    //  Vector add(const Vector& v) const
    //  {
    //      return Vector(x+v.x,y+v.y);
    //  }
    //  Vector multiply(const Vector& v) const
    //  {
    //      return Vector(x*v.x,y*v.y);
    //  }

    // Method 2
    // return_type operator<operator_symbol>(arguments) { ...code... return return_type_variable; }
    Vector operator+(const Vector &v) const
    {
        // return add(v); // with Method 1 add method
        return Vector(x + v.x, y + v.y);
    }
    Vector operator*(const Vector &v) const
    {
        // return multiply(v); // with Method 1 multiply method
        return Vector(x * v.x, y * v.y);
    }
};

int main()
{
    Vector v1(4, 5), v2(8, 5), v3(3, 6);

    // Method 1
    // Vector v4 = v1.add(v2);
    // Vector v5 = v1.multiply(v2);
    // Vector v = v1.add()

    // Method 2
    Vector v4 = v1 + v2;
    Vector v5 = v1 * v2;
    Vector v = v1 + v2 * v3;

    cout << v4.x << ' ' << v4.y << endl;
    cout << v5.x << ' ' << v5.y << endl;
    cout << v.x << ' ' << v.y << endl;
    return 0;
}