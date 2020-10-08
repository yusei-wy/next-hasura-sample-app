import { formatDate } from './date';

describe('formatDate', () => {
    test('作成してすぐ', () => {
        const now = new Date('2020/08/25 17:58:53');
        expect(formatDate(new Date(now), now)).toEqual({
            datetime: '2020/08/25 17:58',
            isNew: true,
        });

        const now2 = new Date('2020/10/08 00:00:00');
        expect(formatDate(new Date('2020/10/07 00:00:00'), now2)).toEqual({
            datetime: '2020/10/07 00:00',
            isNew: true,
        });
    });

    test('1週間経過', () => {
        const now = new Date('2020/08/25 17:58:53');
        expect(formatDate(new Date('2020/08/18 17:58:53'), now)).toEqual({
            datetime: '2020/08/18 17:58',
            isNew: false,
        });
    });
});
