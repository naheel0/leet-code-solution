/* Write your T-SQL query statement below */
SELECT e.name ,b.bonus
FROM Employee e
LEFT JOIN Bonus b
ON b.empId = e.empId
WHERE b.bonus<1000 OR b.bonus is NULL