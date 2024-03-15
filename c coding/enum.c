#include <stdio.h>

enum day
{
    mon = 1,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun
};

typedef enum month
{
    jan = 3,
    feb,
    mar = 0,
    apr,
    may,
    june,
    july = 9,
    aug,
    sep,
    oct,
    nov,
    dec
} mnt;

int main(int argc, char const *argv[])
{
    for (int i = mon; i <= sun; i++)
        printf("%d ", i);
    enum day d = thu;
    printf("\n%d", d);
    mnt m = june;
    printf("\n%d", m);
    printf("\n%d %d %d %d %d %d %d %d %d %d %d %d",
           jan,
           feb,
           mar,
           apr,
           may,
           june,
           july,
           aug,
           sep,
           oct,
           nov,
           dec);
    return 0;
}
