#include <stdio.h>
#include <string.h>

// typedef = #define
// typedef ll long long;
//typedef struct students{...} stu; no need to write struct students s just write stu s

typedef struct students
{
    char name[20];
    int roll;
    char branch[3];
    int marks;
} stu;

int main(int argc, char const *argv[])
{
    stu s;
    struct students p;
    strcpy(s.name, argv[1]); //just write 'Student Name' after .\structs.exe in command line
    // eg. .\structs Sksm
    p.roll = 15;
    s.roll = 15;
    strcpy(s.branch, "CSE");
    s.marks = 90;
    printf("%s\n", s.name);
    printf("%d\n", s.roll);
    printf("%s\n", s.branch);
    printf("%d\n", s.marks);
    printf("%d\n", p.roll);
    return 0;
}
