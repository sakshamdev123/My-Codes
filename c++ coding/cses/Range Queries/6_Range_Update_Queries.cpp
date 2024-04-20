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
    seg[ind] = min(seg[2 * ind + 1], seg[2 * ind + 1]);
}

void update(int ind, int low, int high, int l, int r, int val, int seg[], int lazy[])
{
    if (lazy[ind])
    {
        seg[ind] += lazy[ind];
        if (high - low)
        {
            lazy[2 * ind + 1] += lazy[ind];
            lazy[2 * ind + 2] += lazy[ind];
        }
        lazy[ind] = 0;
    }
    if (high < l || r < low)
        return;
    if (low >= l && r >= high)
    {
        seg[ind] += val;
        if (high - low)
        {
            lazy[2 * ind + 1] += val;
            lazy[2 * ind + 2] += val;
        }
        return;
    }
    int mid = (low + high) >> 1;
    update(2 * ind + 1, low, mid, l, r, val, seg, lazy);
    update(2 * ind + 2, mid + 1, high, l, r, val, seg, lazy);
    seg[ind] = min(seg[2 * ind + 1], seg[2 * ind + 2]);
}

int query(int ind, int low, int high, int l, int r, int seg[], int lazy[])
{
    if (lazy[ind])
    {
        seg[ind] += lazy[ind];
        if (high - low)
        {
            lazy[2 * ind + 1] += lazy[ind];
            lazy[2 * ind + 2] += lazy[ind];
        }
        lazy[ind] = 0;
    }
    if (high < l || r < low)
        return INT64_MAX;
    if (low >= l && r >= high)
        return seg[ind];
    int mid = (low + high) >> 1;
    int left = query(2 * ind + 1, low, mid, l, r, seg, lazy);
    int right = query(2 * ind + 2, mid + 1, high, l, r, seg, lazy);
    return min(left, right);
}

signed main()
{
    int n, q;
    cin >> n >> q;
    int a[n], seg[4 * n + 1], lazy[4 * n + 1] = {0};
    for (int i = 0; i < n; i++)
        cin >> a[i];
    build(0, 0, n - 1, a, seg);
    while (q--)
    {
        int q1;
        cin >> q1;
        if (q1 == 1)
        {
            int q2, q3, q4;
            cin >> q2 >> q3 >> q4;
            update(0, 0, n - 1, q2 - 1, q3 - 1, q4, seg, lazy);
        }
        else
        {
            int q2;
            cin >> q2;
            cout << query(0, 0, n - 1, q2 - 1, q2 - 1, seg, lazy) << '\n';
        }
    }
    return 0;
}