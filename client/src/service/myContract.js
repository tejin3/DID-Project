export const surveyABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'addUser',
        type: 'event'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        name: 'recordVPList',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_surveyId',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: '_publicKey',
                type: 'string'
            }
        ],
        name: 'companyEncrptPublic',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'companyPublic',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '_surveyId',
                type: 'uint256'
            },
            {
                internalType: 'string',
                name: '_VPData',
                type: 'string'
            },
            {
                internalType: 'address',
                name: '_company',
                type: 'address'
            }
        ],
        name: 'recordVP',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            }
        ],
        name: 'surveyUser',
        outputs: [
            {
                internalType: 'bool',
                name: '',
                type: 'bool'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'whoCallVP',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]

export const vcABI = [
    {
        inputs: [],
        stateMutability: 'nonpayable',
        type: 'constructor'
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: false,
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                indexed: false,
                internalType: 'string',
                name: '',
                type: 'string'
            },
            {
                indexed: false,
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'vcCallApprovals',
        type: 'event'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '_user',
                type: 'address'
            }
        ],
        name: 'callData',
        outputs: [
            {
                internalType: 'string[]',
                name: '',
                type: 'string[]'
            },
            {
                internalType: 'uint256[]',
                name: '',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'string',
                name: '_data',
                type: 'string'
            }
        ],
        name: 'vcCall',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'vcCallDate',
        outputs: [
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    },
    {
        inputs: [
            {
                internalType: 'address',
                name: '',
                type: 'address'
            },
            {
                internalType: 'uint256',
                name: '',
                type: 'uint256'
            }
        ],
        name: 'vcCallList',
        outputs: [
            {
                internalType: 'string',
                name: '',
                type: 'string'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]
