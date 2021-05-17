var arr = [
    { EmpNo: 101, EmpName: 'Aa', DeptName: 'IT', Salary: 1000 },
    { EmpNo: 102, EmpName: 'Bb', DeptName: 'Tech', Salary: 2000 },
    { EmpNo: 103, EmpName: 'Cc', DeptName: 'Management', Salary: 3000 },
    { EmpNo: 104, EmpName: 'Dd', DeptName: 'HR', Salary: 4000 },
    { EmpNo: 105, EmpName: 'Ee', DeptName: 'Board', Salary: 5000 },
    { EmpNo: 106, EmpName: 'Ff', DeptName: 'Tech', Salary: 6000 },
    { EmpNo: 107, EmpName: 'Gg', DeptName: 'IT', Salary: 7000 },
    { EmpNo: 108, EmpName: 'Hh', DeptName: 'Management', Salary: 8000 },
    { EmpNo: 109, EmpName: 'Ii', DeptName: 'HR', Salary: 9000 },
    { EmpNo: 110, EmpName: 'Jj', DeptName: 'HR', Salary: 10000 },
    { EmpNo: 111, EmpName: 'Kk', DeptName: 'Tech', Salary: 11000 },
    { EmpNo: 112, EmpName: 'Ll', DeptName: 'Tech', Salary: 12000 },
    { EmpNo: 113, EmpName: 'Mm', DeptName: 'Management', Salary: 13000 },
    { EmpNo: 114, EmpName: 'Nn', DeptName: 'IT', Salary: 14000 },
    { EmpNo: 115, EmpName: 'Oo', DeptName: 'Board', Salary: 15000 },
    { EmpNo: 116, EmpName: 'Pp', DeptName: 'Management', Salary: 16000 },
    { EmpNo: 117, EmpName: 'Qq', DeptName: 'IT', Salary: 17000 },
    { EmpNo: 118, EmpName: 'Rr', DeptName: 'HR', Salary: 18000 },
    { EmpNo: 119, EmpName: 'Ss', DeptName: 'Tech', Salary: 19000 },
    { EmpNo: 120, EmpName: 'Tt', DeptName: 'Director', Salary: 20000 }
];
var ITEmps = arr.filter(function (v, i) {
    return v.DeptName == 'IT';
});
var HREmps = arr.filter(function (vi) {
    return vi.DeptName == 'HR';
});
var TechEmps = arr.filter(function (vi) {
    return vi.DeptName == 'Tech';
});
var ManagementEmps = arr.filter(function (vi) {
    return vi.DeptName == 'Management';
});
var BoardEmps = arr.filter(function (vi) {
    return vi.DeptName == 'Board';
});
var DirectorEmps = arr.filter(function (vi) {
    return vi.DeptName == 'Director';
});
//List of employees dept wise
ITEmps.forEach(function (v, i) {
    console.log("The employee name is " + v.EmpName);
});
// console.log(`The Management employees are below
// ${ManagementEmps}`);
// console.log(`The Director employee is below
// ${DirectorEmps}`);
// console.log(`The HR employees are below
// ${HREmps}`);
// console.log(`The Board employees are below
// ${BoardEmps}`);
// //array sorting
// function sort_by_key(array, key)
// {
//     return array.sort(function(a, b)
//     {
//         var x = a[key]; var y = b[key];
//         return ((x < y) ? -1 : ((x > y) ? 1 : 0));
//     });
// }
// let sortedArray = sort_by_key(arr, 'EmpName');
// sortedArray.array.forEach(element => {
//     console.log(`Employees after sorting by name ${element.EmpName}`)
// });
