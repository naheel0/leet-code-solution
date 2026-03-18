/* Write your T-SQL query statement below */
SELECT p.product_name,SUM(o.unit) AS unit
FROM Products p
LEFT JOIN Orders o
ON p.product_id =o.product_id
WHERE o.order_date >= '2020-02-01' 
AND o.order_date < '2020-03-01'
GROUP BY product_name
HAVING SUM(o.unit)>=100 
ORDER BY SUM(o.unit) DESC 