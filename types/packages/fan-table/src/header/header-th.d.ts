declare namespace _default {
    let name: string;
    let inject: string[];
    namespace props {
        namespace groupColumn {
            let type: ArrayConstructor;
            let required: boolean;
        }
        namespace groupColumnItem {
            let type_1: ObjectConstructor;
            export { type_1 as type };
            let required_1: boolean;
            export { required_1 as required };
        }
        namespace colgroups {
            let type_2: ArrayConstructor;
            export { type_2 as type };
            let required_2: boolean;
            export { required_2 as required };
        }
        namespace headerRows {
            let type_3: ArrayConstructor;
            export { type_3 as type };
            function _default(): any[];
            export { _default as default };
        }
        namespace fixedHeader {
            let type_4: BooleanConstructor;
            export { type_4 as type };
        }
        namespace isGroupHeader {
            let type_5: BooleanConstructor;
            export { type_5 as type };
            let required_3: boolean;
            export { required_3 as required };
        }
        namespace rowIndex {
            let type_6: NumberConstructor;
            export { type_6 as type };
            let required_4: boolean;
            export { required_4 as required };
        }
        namespace cellSelectionData {
            let type_7: ObjectConstructor;
            export { type_7 as type };
            function _default_1(): any;
            export { _default_1 as default };
        }
        namespace cellSelectionRangeData {
            let type_8: ObjectConstructor;
            export { type_8 as type };
            function _default_2(): any;
            export { _default_2 as default };
        }
        namespace headerIndicatorColKeys {
            let type_9: ObjectConstructor;
            export { type_9 as type };
            function _default_3(): any;
            export { _default_3 as default };
        }
        namespace checkboxOption {
            let type_10: ObjectConstructor;
            export { type_10 as type };
            function _default_4(): any;
            export { _default_4 as default };
        }
        namespace sortOption {
            let type_11: ObjectConstructor;
            export { type_11 as type };
            function _default_5(): any;
            export { _default_5 as default };
        }
        namespace sortColumns {
            let type_12: ObjectConstructor;
            export { type_12 as type };
            function _default_6(): any;
            export { _default_6 as default };
        }
        namespace cellStyleOption {
            let type_13: ObjectConstructor;
            export { type_13 as type };
            function _default_7(): any;
            export { _default_7 as default };
        }
        namespace eventCustomOption {
            let type_14: ObjectConstructor;
            export { type_14 as type };
            function _default_8(): any;
            export { _default_8 as default };
        }
    }
    namespace computed {
        function isLastLeftFixedColumn(): boolean;
        function isfirstRightFixedColumn(): boolean;
        function isLastCloumn(): boolean;
        function isSortableCloumn(): boolean;
    }
    namespace methods {
        function getTheadThClass({ fixed }: {
            fixed: any;
        }): {
            [x: string]: any;
        };
        function getTheadThStyle({ _keys, align, fixed }: {
            _keys: any;
            align: any;
            fixed: any;
        }, rowIndex: any): {
            'text-align': any;
            left: string | number;
            right: string | number;
            top: number;
        };
        function getCheckboxContent(): any;
        function sortChange(): void;
        function getSortContent(): any;
        function getFilterContent(): any;
        function getFilterCustomContent(): any;
        function cellClick(e: any, fn: any): void;
        function cellDblclick(e: any, fn: any): void;
        function cellContextmenu(e: any, fn: any): void;
        function cellMouseenter(e: any, fn: any): void;
        function cellMouseleave(e: any, fn: any): void;
        function cellMousemove(e: any, fn: any): void;
        function cellMouseover(e: any, fn: any): void;
        function cellMousedown(e: any, fn: any): void;
        function cellMouseup(e: any, fn: any): void;
    }
    function render(h: any): any;
}
export default _default;
