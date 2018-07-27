## Rubric

| Score | Meaning
| 0 | Critera not met
| 1 | Criteria met inconsistently
| 2 | Criteria met consistently

### Backend (6/40)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Properly handles errors in routes (i.e. by passing them to `next`) | -/2 | |
| Properly manages control flow in routes (i.e. does not send more than one response for the same request) | -/2 | |
| Selects appropriate data types for database columns | -/2 | |

### Frontend (6/20)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Uses thunks to encapsulate AJAX requests | -/2 | |
| Avoids side effects/mutations in reducers and in renders | -/2 | |
| Takes advantage of components to enforce modularity/separation of concerns | -/2 | |

### Code Cleanliness/Maintainability (8/20)

| Criteria | Score | Comments |
| ------------- |-------------| -----|
| Formatting (indentation, whitespace, etc) is consistent | -/2 | |
| No unused/unnecessary code | -/2 | |
| Uses meaningful/self-documenting variable/function names | -/2 | |
| Does not contain blocks of commented out code (except for documentation) | -/2 | |

## Comments

## Evaluation

- Requirements score (57 points total, weighted at 60% of total grade)
- Rubric score (20 points total, weighted at 40% of total grade)
- Extra credit (15 points total, for additional 15% max)

```javascript
const getTotal = (rawRequirementScore, rawRubricScore, rawExtraCredit) => {
  const totalRequirementScore = ((rawRequirementScore/57) * 100) * 0.6
  const totalRubricScore = ((rawRubricScore/20) * 100) * 0.4
  const totalExtraCredit = ((rawExtraCredit/15) * 100) * 0.15

  const total = totalRequirementScore + totalRubricScore + totalExtraCredit
  return total
}
```
