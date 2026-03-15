/* Write your T-SQL query statement below */
SELECT e.name ,b.unique_id
FROM Employees e
LEFT JOIN EmployeeUNI b
ON e.id =b.id