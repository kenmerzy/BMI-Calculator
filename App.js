import React from 'react'
import {
  View, Text, TouchableOpacity, Image, SafeAreaView,
  Dimensions, TextInput, ScrollView,
} from 'react-native'
import {
  male, female, iconBack, iconRefresh, backGround,
} from './assets/images'

const { width, height } = Dimensions.get('window')
const screenScale = width / 375
const App = () => {
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

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <View>
            <View
              style={{ flexDirection: 'row', alignItems: 'center' }}
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
              marginTop: 15, fontSize: 28, fontFamily: 'SFProText-Regular', color: '#E0F2F1',
            }}
            >
              BMI Calculator
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => { }}
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
              onPress={() => { }}
            >
              <View style={{
                width: 144 * screenScale,
                height: 144 * screenScale,
                alignItems: 'center',
                backgroundColor: 'rgba(114, 144, 157, 0.0858)',
                borderRadius: 10,
              }}
              >
                <Image
                  source={male}
                  style={{
                    width: 38 * screenScale,
                    height: 38 * screenScale,
                    marginTop: 40 * screenScale,
                    marginBottom: 16 * screenScale,
                  }}
                  resizeMode="cover"
                />
                <Text style={{ fontFamily: 'SFProText-Medium', fontSize: 18, color: '#72909D' }}>Male</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => { }}
            >
              <View style={{
                width: 144 * screenScale,
                height: 144 * screenScale,
                alignItems: 'center',
                backgroundColor: 'rgba(114, 144, 157, 1.0)',
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
                  }}
                  resizeMode="cover"
                />
                <Text style={{
                  fontFamily: 'SFProText-Bold',
                  fontSize: 18,
                  color: '#FFFFFF',
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
              <Text style={{
                marginRight: 8 * screenScale,
                fontFamily: 'SFProText-Medium',
                fontSize: 14 * screenScale,
                color: '#72909D',
                marginLeft: 8 * screenScale,

              }}
              >
                ft
              </Text>
            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  color: '#72909D',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              >
                182
              </TextInput>
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
              <Text style={{
                marginRight: 8 * screenScale,
                fontFamily: 'SFProText-Medium',
                fontSize: 14 * screenScale,
                color: '#72909D',
                marginLeft: 8 * screenScale,

              }}
              >
                lb
              </Text>
            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  color: '#FFFFFF',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              >
                80.3
              </TextInput>
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
                goal
              </Text>

            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  color: '#FFFFFF',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              >
                79
              </TextInput>
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
                age
              </Text>

            </View>
            <View style={{
              width: 144 * screenScale,
              height: 72 * screenScale,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#2F3F4B',
              borderRadius: 36 * screenScale,

            }}
            >
              <TextInput
                keyboardType="numeric"
                style={{
                  color: '#FFFFFF',
                  fontSize: 36,
                  fontFamily: 'SFProText-Bold',
                }}
              >
                29
              </TextInput>
            </View>
          </View>

        </View>
      </ScrollView>
    </View>
  )
}
export default App
