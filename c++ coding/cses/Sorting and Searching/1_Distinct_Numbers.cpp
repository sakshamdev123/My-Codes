#include <iostream>
#include <set>
using namespace std;

int main()
{
    int n, a;
    cin >> n;
    set<int> se;
    for (int i = 0; i < n; i++)
        cin >> a, se.insert(a);
    cout << se.size();
    return 0;
}