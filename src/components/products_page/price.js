import React from 'react'
import {Heading, Progress, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Text, Box} from "@chakra-ui/react";

const Price = () => {
    return (
        <>
            <Heading color='#000'
                     mt={'2.5rem'}
                     fontSize='1.09363rem'
                     fontWeight='400'
                     textTransform={'uppercase'}
                     lineHeight='normal' mb={'1rem'}>Price</Heading>
            <Progress value={20} size='xs' colorScheme='pink' mt={'.6rem'}  mb={'1rem'} />

            <RangeSlider
                aria-label={['min', 'max']}
                colorScheme='pink'
                defaultValue={[0, 30]}
            >
                <RangeSliderTrack>
                    <RangeSliderFilledTrack />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} />
                <RangeSliderThumb index={1} />
            </RangeSlider>

            <Text>Range : ₦50,000 - ₦400,000</Text>
        </>
    )
}

export default Price;

