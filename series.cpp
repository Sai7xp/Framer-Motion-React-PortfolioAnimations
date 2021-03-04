#include <iostream>
using namespace std;
int main()
{
    int c = 50, d = 2;
    c = (d += c -= d) - c;
    cout << c << " " << d << endl;
    int count = 4, prev = 13;
    int n = 0;
    cin >> n;
    n -= 2;
    cout << 9 << " " << prev << " ";
    while (n--)
    {
        count += 5;
        prev = prev + count;
        cout << prev << " ";
    }
    return 0;
}