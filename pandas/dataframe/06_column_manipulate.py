import pandas as pd

d = {'one': pd.Series([1, 2, 3], index=['a', 'b', 'c']), 'two': pd.Series([1, 2, 3, 4], index=['a', 'b', 'c', 'd'])}
df = pd.DataFrame(d)

# Column Selection
print(df['one'])
print()

# Column Addition
# Adding a new column to an existing DataFrame object with column label by passing new series
print("Adding a new column by passing as Series:")
df['three'] = pd.Series([10, 20, 30], index=['a', 'b', 'c'])
print(df)
print()

print("Adding a new column using the existing columns in DataFrame:")
df['four'] = df['one'] + df['three']
print(df)
print()

# Column Deletion
# using del function
print("Deleting the first column using DEL function:")
del df['one']
print(df)
print()

# using pop function
print("Deleting another column using POP function:")
df.pop('two')
print(df)
