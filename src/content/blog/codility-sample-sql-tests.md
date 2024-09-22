---
title: "Tried Out The Codility Sample SQL Tests"
layout: "/src/layouts/PostLayout.astro"
category: Code
author: guissmo
date: 2023-10-15T10:11:32.538Z
description: Tried out the codility sample SQL tests.
slug: codility-sample-sql-tests
tags:
  - python
  - problem solving
  - codility
---

I tried out some of Codility's [publicly-available sample SQL tests](https://app.codility.com/programmers/trainings/6/) despite knowing only the theoretical concepts behind SQL databases (what `JOIN` means, a `GROUP BY` operation exists, etc). With some Google-Fu and some help from Chat GPT, I managed to find make a 100% solution to two of their sample tests.

Looking to find some time knowing how to write and optimize SQL code for huge data sets, but for now I'm happy to have these tests and code for reference.

# Test 2: SqlEventsDelta

[Problem Statement](https://app.codility.com/programmers/trainings/6/sql_events_delta/) | [Results](https://app.codility.com/demo/results/training53KDEQ-NRV/)

```sql
WITH t1 AS
(SELECT event_type, nth_value(value, 1) OVER (
    PARTITION BY event_type ORDER BY time DESC
) - nth_value(value, 2) OVER (
    PARTITION BY event_type ORDER BY time DESC
) AS dif
FROM events)
SELECT DISTINCT * FROM t1 WHERE dif IS NOT NULL ORDER BY event_type
```

# Test 3: SqlWorldCup

[Problem Statement](https://app.codility.com/programmers/trainings/6/sql_world_cup/) | [Results](https://app.codility.com/demo/results/trainingTRME52-2PD/)

```sql
WITH

host_points AS (SELECT host_team AS team_id, CASE WHEN host_goals > guest_goals THEN 3 WHEN host_goals < guest_goals THEN 0 ELSE 1 END AS points FROM matches),

guest_points AS (SELECT guest_team AS team_id, CASE WHEN host_goals < guest_goals THEN 3 WHEN host_goals > guest_goals THEN 0 ELSE 1 END AS points FROM matches)

SELECT
combined.team_id AS team_id, teams.team_name, SUM(points) AS num_points
FROM (
    SELECT * FROM host_points
    UNION ALL
    SELECT * FROM guest_points
    UNION ALL
    SELECT team_id, 0 FROM teams
) AS combined
LEFT JOIN teams ON combined.team_id = teams.team_id
GROUP BY combined.team_id, teams.team_name
ORDER BY num_points DESC, combined.team_id
```
