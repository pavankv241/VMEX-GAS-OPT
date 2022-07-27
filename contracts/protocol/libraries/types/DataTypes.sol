// SPDX-License-Identifier: agpl-3.0
pragma solidity >=0.8.0;

library DataTypes {
    // refer to the whitepaper, section 1.1 basic concepts for a formal description of these properties.

    struct TrancheAddress {
        uint8 tranche;
        address asset;
    }
    struct ReserveData {
        //stores the reserve configuration
        ReserveConfigurationMap configuration;
        //the liquidity index. Expressed in ray
        uint128 liquidityIndex;
        //variable borrow index. Expressed in ray
        uint128 variableBorrowIndex;
        //the current supply rate. Expressed in ray
        uint128 currentLiquidityRate;
        //the current variable borrow rate. Expressed in ray
        uint128 currentVariableBorrowRate;
        //the current stable borrow rate. Expressed in ray
        uint128 currentStableBorrowRate;
        uint40 lastUpdateTimestamp;
        //tokens addresses
        address aTokenAddress;
        address stableDebtTokenAddress;
        address variableDebtTokenAddress;
        //address of the interest rate strategy
        address interestRateStrategyAddress;
        //the id of the reserve. Represents the position in the list of the active reserves
        uint8 id;
        uint8 tranche;
    }

    struct Tranche {
        uint8 riskLevel;
        uint256 variableBorrowRateMultiplier;
        uint256 stableBorrowRateMultiplier;
    }

    // struct AssetTranche {
    //     address asset;
    //     uint8 tranche;
    // }

    uint8 constant NUM_TRANCHES = 3;

    struct ReserveConfigurationMap {
        //bit 0-15: LTV
        //bit 16-31: Liq. threshold
        //bit 32-47: Liq. bonus
        //bit 48-55: Decimals
        //bit 56: Reserve is active
        //bit 57: reserve is frozen
        //bit 58: borrowing is enabled
        //bit 59: stable rate borrowing enabled
        //bit 60-63: reserved
        //bit 64-79: reserve factor
        uint256 data;
    }

    struct UserConfigurationMap {
        uint256 data;
    }

    enum InterestRateMode {NONE, STABLE, VARIABLE}

    struct AcctTranche {
        address user;
        uint8 tranche;
    }

    struct ExecuteBorrowParams {
        address asset;
        uint8 tranche; //tranche the user wants to borrow out of
        address user;
        address onBehalfOf;
        uint256 amount;
        uint256 interestRateMode;
        address aTokenAddress;
        uint16 referralCode;
        bool releaseUnderlying;
    }

    struct WithdrawParams {
        uint256 _reservesCount;
        address oracle;
        address asset;
        uint8 tranche;
        uint256 amount;
        address to;
    }
}
