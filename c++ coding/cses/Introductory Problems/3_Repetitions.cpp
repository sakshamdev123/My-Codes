#include <bits/stdc++.h>
using namespace std;

int main()
{
    string s;
    cin >> s;
    int count = 0, temp = 0;
    for (int i = 0; i < s.length() - 1; i++)
    {
        if (s[i] - s[i + 1])
            temp = 0;
        else if (!temp)
            temp = 2;
        else
            temp++;
        count = max(temp, count);
    }
    cout << ((count) ? count : 1);
    return 0;
}
