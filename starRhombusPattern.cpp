#include <iostream>
using namespace std;
int main()
{
  int n, i, j;
  cout<<"Enter the number of stars per side : ";
  cin >> n;
  for (i = n - 1; i >= 0; i--)
  {
    for (j = i; j >= 1; j--)
    {
      cout << "  ";
    }
    for (j = 1; j <= n; j++)
      cout << "*  ";
    cout << endl;
  }
  return 0;
}