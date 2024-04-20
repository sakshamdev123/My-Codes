#include <bits/stdc++.h>
using namespace std;

#define int long long int

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
    seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
}

void update(int ind, int low, int high, int i, int val, int seg[])
{
    if (low == high)
    {
        seg[ind] = val;
        return;
    }
    int mid = (low + high) >> 1;
    if (i <= mid)
        update(2 * ind + 1, low, mid, i, val, seg);
    else
        update(2 * ind + 2, mid + 1, high, i, val, seg);
    seg[ind] = seg[2 * ind + 1] + seg[2 * ind + 2];
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
    return left + right;
}

signed main(int argc, char *argv[])
{
    int n, q;
    cin >> n >> q;
    int a[n], seg[4 * n + 1];
    for (int i = 0; i < n; i++)
        cin >> a[i];
    build(0, 0, n - 1, a, seg);
    while (q--)
    {
        int q1, q2, q3;
        cin >> q1 >> q2 >> q3;
        if (q1 == 1)
        {
            a[q2] = q3;
            update(0, 0, n - 1, q2 - 1, q3, seg);
        }
        else
            cout << query(0, 0, n - 1, q2 - 1, q3 - 1, seg) << '\n';
    }
    return 0;
}