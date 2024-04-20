#include <bits/stdc++.h>
using namespace std;

void build(int ind, int low, int high, int a[], int seg[])
{
    if (low == high)
    {
        seg[ind] = a[low];
        return;
    }
    int mid = (low + high) >> 1;
    build(2 * ind + 1, low, mid, a, seg);
    build(2 * ind + 2, mid + 1, high, a, seg);
    seg[ind] = seg[2 * ind + 1] ^ seg[2 * ind + 2];
}

int query(int ind, int low, int high, int l, int r, int seg[])
{
    if (r < low || high < l)
        return 0;
    if (l <= low && high <= r)
        return seg[ind];
    int mid = (low + high) >> 1;
    int left = query(2 * ind + 1, low, mid, l, r, seg);
    int right = query(2 * ind + 2, mid + 1, high, l, r, seg);
    return left ^ right;
}

int main(int argc, char *argv[])
{
    int n, q;
    cin >> n >> q;
    int a[n], seg[4 * n + 1];
    for (int i = 0; i < n; i++)
        cin >> a[i];
    build(0, 0, n - 1, a, seg);
    while (q--)
    {
        int q1, q2;
        cin >> q1 >> q2;
        cout << query(0, 0, n - 1, q1 - 1, q2 - 1, seg) << '\n';
    }
    return 0;
}