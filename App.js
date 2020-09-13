import React, { useState } from 'react'
import {
  View, Text, TouchableOpacity, Image, SafeAreaView,
  Dimensions, TextInput, ScrollView, Modal,
} from 'react-native'
import {
  male, female, iconBack, iconRefresh, backGround, calculate_btn,
} from './assets/images'

const { width, height } = Dimensions.get('window')
const screenScale = width / 375

const App = () => {
  const [heightValue, setheightValue] = useState(1)
  const [weightValue, setWeightValue] = useState(0)
  const [bmiValue, setBmiValue] = useState(0)
  const [isMale, setIsMale] = useState(true)
  const restart = () => {
    // eslint-disable-next-line no-unused-expressions
    setheightValue(1)
    setWeightValue(0)
  }
  const [isModalBMIVisible, setIsModalBMIVisible] = useState(false)
  const caculateBMI = () => {
    const bmivl = weightValue / ((heightValue / 100) * (heightValue / 100))
    setBmiValue(bmivl)
    setIsModalBMIVisible(true)
  }
  
  const [isFocusHeightInput, setIsFocusHeightInput] = useState(false)
  const [isFocusWeightInput, setIsFocusWeightInput] = useState(false)

  return (
    <View style={{ paddingHorizontal: 30 * screenScale }}>
      <Image
        source={backGround}
        style={{
          width,
          height,
          position: 'absolute',
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView />

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20 * screenScale,
        }}
        >
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center', 
              }}
            >
              <TouchableOpacity
                onPress={() => { }}
              >
                <Image
                  source={iconBack}
                  style={{
                    width: 8 * screenScale,
                    height: 15 * screenScale,
                  }}
                  resizeMode="cover"
                />
              </TouchableOpacity>
              <Text style={{
                marginLeft: 16 * screenScale,
                fontFamily: 'SFProText-Medium',
                fontSize: 16 * screenScale,
                color: '#72909D',
                opacity: 0.3,

              }}
              >
                Weight Diary
              </Text>
            </View>
            <Text style={{
              marginTop: 15,
              fontSize: 28,
              fontFamily: 'SFProText-Regular',
              color: '#E0F2F1',
            }}
            >
              BMI Calculator
            </Text>
          </View>
          <TouchableOpacity
            onPress={restart}
          >
            <Image
              source={iconRefresh}
              style={{
                width: 48 * screenScale,
                height: 48 * screenScale,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 29 * screenScale }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <TouchableOpacity
              onPress={() => { setIsMale(true) }}
            >
              <View style={{
                width: 144 * screenScale,
                height: 144 * screenScale,
                alignItems: 'center',
                backgroundColor: isMale ? 'rgba(114, 144, 157, 1.0)' : 'rgba(114, 144, 157, 0.0858)',
                borderRadius: 10 * screenScale,
              }}
              >
                <Image
                  source={male}
                  style={{
                    width: 38 * screenScale,
                    height: 38 * screenScale,
                    marginTop: 40 * screenScale,
                    marginBottom: 16 * screenScale,
                    tintColor: isMale ? '#FFFFFF' : '#72909D',
                  }}
                  resizeMode="cover"
                />
                <Text style={{
                  fontFamily: 'SFProText-Medium',
                  fontSize: 18,
                  color: isMale ? '#FFFFFF' : '#72909D', 
                }}
                >
                  Male
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { setIsMale(false) }}
            >
              <View style={{
                width: 144 * screenScale,
                height: 144 * screenScale,
                alignItems: 'center',
                backgroundColor: isMale ? 'rgba(114, 144, 157, 0.0858)' : 'rgba(114, 144, 157, 1.0)',
                borderRadius: 10,
              }}
              >
                <Image
                  source={female}
                  style={{
                    width: 38 * screenScale,
                    height: 38 * screenScale,
                    marginTop: 40 * screenScale,
                    marginBottom: 16 * screenScale,
                    tintColor: isMale ? '#72909D' : '#FFFFFF',
                  }}
                  resizeMode="cover"
                />
                <Text style={{
                  fontFamily: 'SFProText-Bold',
                  fontSize: 18,
                  color: isMale ? '#72909D' : '#FFFFFF',
                }}
                >
                  Female
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 32 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 144 * screenScale,
              height: 72 * screenScale,
              borderRadius: 36 * screenScale,

            }}
            >
              <Text style={{
                fontFamily: 'SFProText-Bold',
                fontSize: 14 * screenScale,
                color: '#E0F2F1',
              }}
              >
                cm
                
              </Text>
            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                value={heightValue}
                onChangeText={(text) => { setheightValue(text) }}
                textAlign="center"
                maxLength={5}
                placeholder="0"
                placeholderTextColor="#72909D"
                onFocus={() => { setIsFocusHeightInput(true) }}
                onBlur={() => { setIsFocusHeightInput(false) }}
                style={{
                  color: isFocusHeightInput ? '#FFFFFF' : '#72909D',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              />
            </View>
          </View>
          <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 32 * screenScale,
          }}
          >
            <View style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              width: 144 * screenScale,
              height: 72 * screenScale,
              borderRadius: 36 * screenScale,

            }}
            >
              <Text style={{
                fontFamily: 'SFProText-Bold',
                fontSize: 14 * screenScale,
                color: '#E0F2F1',
              }}
              >
                kg
              </Text>
            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                value={weightValue}
                onChangeText={(text) => { setWeightValue(text) }}
                textAlign="center"
                maxLength={5}
                placeholder="0"
                placeholderTextColor="#72909D"
                onFocus={() => { setIsFocusWeightInput(true) }}
                onBlur={() => { setIsFocusWeightInput(false) }}
                style={{
                  color: isFocusWeightInput ? '#FFFFFF' : '#72909D',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              />
            </View>
          </View>

        </View>
      </ScrollView>
      
      <TouchableOpacity
        onPress={caculateBMI}
      >
        <View style={{
        
          marginTop: 40 * screenScale,
        }}
        >
          <Image
            source={calculate_btn}
            style={{
              width: 320 * screenScale,
              height: 54 * screenScale,
              borderRadius: 27 * screenScale,
            }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
      <Modal
        visible={isModalBMIVisible}
        animationType="slide"
        transparent
      >
        <View style={{
          flex: 1,
          backgroundColor: 'rgba(36, 50, 61,1)',
          justifyContent: 'center',
          alignItems: 'center',
          opacity: 0.9,
        }}
        >
          <View style={{
            backgroundColor: '#72909D',
            borderRadius: 10 * screenScale,
            width: 45 * screenScale,
            height: 45 * screenScale,
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            right: 32 * screenScale,
            top: 32 * screenScale,
        
          }}
          >
            <TouchableOpacity
              onPress={() => { setIsModalBMIVisible(false) }}
            >
              <Text
                style={{
                  fontFamily: 'SFProText-Bold',
                  fontSize: 20 * screenScale,
                  color: '#FFFFFF', 
                  textAlign: 'center',
                  
                }}
              >
                X
              </Text>
              
            </TouchableOpacity>
          </View>
          <View style={{
            width: 250 * screenScale,
            height: 250 * screenScale,
            borderRadius: 20 * screenScale,
            backgroundColor: '#72909D',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <Text style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 36 * screenScale,
              color: '#FFFFFF', 
            }}
            >
              Your BMI
            </Text>
            <Text style={{
              fontFamily: 'SFProText-Bold',
              fontSize: 72 * screenScale,
              color: '#FFFFFF', 
            }}
            >
              {bmiValue.toFixed(1)}
            </Text>
          </View>
        </View>
       
      </Modal>
    </View>
  )
}
export default App
