persons = ['张三', '李思', '王武']

personsH1 = list(map(lambda p: f'<h1>{p}</h1>', persons))
print(personsH1)

class A:
    def __init__(self) -> None:
        pass


class B(A):
    def __init__(self) -> None:
        super().__init__()


