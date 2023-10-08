from sum_pairs import sum_pairs

def test():
    assert sum_pairs([1,2,3,4,5], 9) == [[4,5]]
    assert sum_pairs([1,2,3,4,5], 7) == [[2,5], [3,4]]
    assert sum_pairs([3, 1, 5, 8, 2], 27) == 'unable to find pairs'
