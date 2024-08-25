"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorToHttpException = void 0;
const common_1 = require("@nestjs/common");
const failed_precondition_error_1 = require("../../services/instructions/errors/failed-precondition.error");
const errorToHttpException = (err) => {
    let statusCode = common_1.HttpStatus.INTERNAL_SERVER_ERROR;
    const errorMessage = err.message;
    if (err instanceof failed_precondition_error_1.FailedPreconditionError) {
        statusCode = common_1.HttpStatus.PRECONDITION_FAILED;
    }
    return new common_1.HttpException(common_1.HttpException.createBody({
        message: errorMessage,
    }), statusCode);
};
exports.errorToHttpException = errorToHttpException;
//# sourceMappingURL=error-converter.js.map