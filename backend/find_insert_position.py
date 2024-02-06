def find_insert_position(arr, target):
    """
    Finds the position where target fits in a descending-ordered array arr.
    """
    low, high = 0, len(arr) - 1
    
    # If the target is greater than the first element or less than the last,
    # it fits outside the current bounds of the array.
    if target > arr[0]:
        return 0
    if target < arr[-1]:
        return len(arr)
    
    while low <= high:
        mid = (low + high) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            high = mid - 1
        else:
            low = mid + 1
            
    return low  # The position where the target would fit


# TEST
if __name__ == "__main__":
  # Example usage with a descending array
  descending_array = [10, 8, 6, 4, 2]
  new_value = 9.4

  # Find and print the position where the new value would fit
  position = find_insert_position(descending_array, new_value)
  print(f"The new value {new_value} fits at position {position} in the array.")
