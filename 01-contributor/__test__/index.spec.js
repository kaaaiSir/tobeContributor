const { double } = require('../index');

// 测试套件
describe('01-contributor/index', () => {
    // 单个测试用例
    it('测试加倍功能', () => {
        // 结论
        expect(double(1)).toBe(2);
    })
})