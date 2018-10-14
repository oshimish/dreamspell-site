import * as g from 'dreamspell-math';
import moment from 'moment';
import ArrowKeysReact from 'arrow-keys-react';

const store = {
    date: moment(),
    moment: moment(),
    gdate: g.dreamdate(moment()),
    inc: () => state => {
        const date = state.date.add(-1, 'd');
        state.setDate({ date: date });
    },
    dec: () => state => {
        const date = state.date.add(1, 'd');
        state.setDate({ date: date });
    },
    setDate: () => (date) => {
        var gdate = g.dreamdate(date);

        return {
            date: moment(date),
            moment: moment(date),
            gdate
        }
    }
}

ArrowKeysReact.config({
    left: () => {
        store.dec();
    },
    right: () => {
        store.inc();
    }
});

export default store;
