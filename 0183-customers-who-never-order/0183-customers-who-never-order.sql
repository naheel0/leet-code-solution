/* Write your T-SQL query statement below */
SELECT c.name AS customers
FROM Customers c
LEFT JOIN Orders o
ON c.id = o.customerId
WHERE o.customerId IS NULL