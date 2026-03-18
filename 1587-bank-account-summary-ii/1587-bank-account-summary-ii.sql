/* Write your T-SQL query statement below */
SELECT u.name AS NAME ,
SUM(amount) AS  balance  
FROM Users u
JOIN Transactions t
ON u.account =t.account
GROUP BY name 
HAVING SUM(amount)>10000
