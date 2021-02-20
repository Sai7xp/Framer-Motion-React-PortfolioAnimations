#include <bits/stdc++.h>
#define FOR(i, a) for (int i = 0; i < (a); i++)
#define rep(i, a, n) for (int i = a; i < (n); i++)
#define fastio                    \
    ios_base::sync_with_stdio(0); \
    cin.tie(0);                   \
    cout.tie(0)
#define ll long long
#define coutarr(i, n, arr)      \
    for (int i = 0; i < n; i++) \
        cout << arr[i] << ' ' << endl;
using namespace std;
const ll MOD = 1e9 + 7;
map<char, int> mp;
int solve()
{
    int n = 0, count = 0;
    cin >> n;
    vector<int> ar(n);
    FOR(i, n)
    {
        cin >> ar[i];
    }
    rep(i, 0, n - 1)
    {
        int maxi = max(ar[i], ar[i + 1]);
        int mini = min(ar[i], ar[i + 1]);
        while (maxi > 2 * mini)
        {
            count++;
            mini = 2 * mini;
        }
    }
    return count;
}
int main()
{
    fastio;
    int T;
    cin >> T;
    while (T-- > 0)
    {
        cout << solve() << endl;
    }
    return 0;
}