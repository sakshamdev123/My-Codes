#include <iostream>
#include <fstream>
#include <string>
#include <vector>
using namespace std;
#include "lexer.hpp"
int i = 0;
const char *y = typeid(i).name();

int main()
{
    vector<Container> parseTable;
    int lineCount = 0, columnCount;
    ifstream fin;
    fin.open("input.txt");
    string inputLine;
    while (getline(fin, inputLine))
    {
        lineCount++;
        columnCount = 0;
        while (columnCount < inputLine.length())
        {
            if (isalpha(inputLine[columnCount]))
            {
                string name(1, inputLine[columnCount]);
                const char *type = "int";
                Container temp = new Identifier(name, type);
                parseTable.push_back(temp);
            }
            else if (inputLine[columnCount] == '+' || inputLine[columnCount] == '*' || inputLine[columnCount] == '=')
            {
                char ch = inputLine[columnCount];
                string name = (ch == '+') ? "add" : ((ch == '*') ? "mul" : "ass");
                Container temp = new Operator(name, ch);
                parseTable.push_back(temp);
            }
            else
            {
                Container temp = new Terminator();
                parseTable.push_back(temp);
            }
            columnCount++;
        }
    }

    fin.close();

    string output;
    string line = "+-----------+-----------+-----------+-----------+\n";
    output += line;
    output += "| Name      | Type      | Address   | Size      |\n";
    output += line;
    for (int i = 0; i < parseTable.size(); i++)
    {
        output += "| ";
        const char ch = parseTable[i].get();
        if (ch == 'i')
        {
            output += parseTable[i].getIdentifier()->getInfo();
        }
        else if (ch == 'o')
        {
            output += parseTable[i].getOperator()->getInfo();
        }
        else
        {
            output += parseTable[i].getTerminator()->getInfo();
        }
    }
    output += line;

    ofstream fout;
    fout.open("parseTable.txt");

    fout << output;
    fout.close();

    return 0;
}