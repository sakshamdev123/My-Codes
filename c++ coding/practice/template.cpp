#include <bits/stdc++.h>
using namespace std;

template <class T>
T operate(int count, T (*operation)(T, T), ...)
{
    T ans;
    va_list l;
    va_start(l, operation);
    ans = va_arg(l, T);
    for (int i = 1; i < count; i++)
        ans = operation(ans, va_arg(l, T));
    va_end(l);
    return ans;
}

template <class T>
T mini(T a, T b) { return min(a, b); }

template <class T>
T maxi(T a, T b) { return max(a, b); }

template <class T>
T gcd(T a, T b) { return __gcd(a, b); }

template <class T>
T add(T a, T b) { return a + b; }

template <class T>
T mul(T a, T b) { return a * b; }

template <typename T>
void in(T &&val) { cin >> val; }

template <typename T, typename... Args>
void in(T &&first, Args &&...args)
{
    cin >> first;
    in(forward<Args>(args)...);
}

template <typename T>
void out(T &&last) { cout << last; }

template <typename T, typename... Args>
void out(T &&first, Args &&...args)
{
    cout << first << " ";
    out(forward<Args>(args)...);
}

template <class T>
int lwb(const vector<T> &a, const T &b) { return int(lb(all(a), b) - bg(a)); }

template <class T>
int upb(const vector<T> &a, const T &b) { return int(ub(all(a), b) - bg(a)); }

#define int long long int
#define fast_io ios_base ::sync_with_stdio(false), cin.tie(nullptr)
#define f(n) for (int i = 0; i < n; i++)
#define fj(j, n) for (int j = 0; j < n; j++)
#define fr(n) for (int i = n; i >= 0; i--)
#define fjr(j, n) for (int j = n; j >= 0; j--)
#define v(n) vector<int> v(n)
#define pb push_back
#define vr(u, n) vector<int> u(n)
#define vi(n, a) vector<int> v(n, a)
#define vri(u, n, a) vector<int> u(n, a)
#define sz(a) a.size()
#define lg(a) a.length()
#define bte(a) a.begin(), a.end()
#define rv(a) reverse(bte(a));
#define sort(a) sort(bte(a))
#define ins insert
#define ft front()
#define bk back()
#define iv(n) f(n) cin >> v[i];
#define ivr(u, n) f(n) cin >> u[i];
#define gf(dt, c, op, ...) operate(c, op<dt>, ##__VA_ARGS__)
#define avg(c, ...) (float)operate(c, add<int>, ##__VA_ARGS__) / c
#define bpc(n) __builtin_popcount(n)
#define nl cout << '\n'
#define log(...) out(__VA_ARGS__, '\n')

//---------------------------------------------------------------------------------------------------------------------

void sol();

signed main()
{
    int t = 1;
    in(t);
    while (t--)
        sol();
    return 0;
}

void sol()
{
    // ---------------------------------------Code Here----------------------------------------------------------------
}