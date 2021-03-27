// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: helpinghand/completion.proto

package types

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type Completion struct {
	Creator   string `protobuf:"bytes,1,opt,name=creator,proto3" json:"creator,omitempty"`
	Id        uint64 `protobuf:"varint,2,opt,name=id,proto3" json:"id,omitempty"`
	TaskID    int32  `protobuf:"varint,3,opt,name=taskID,proto3" json:"taskID,omitempty"`
	ImageURL  string `protobuf:"bytes,4,opt,name=imageURL,proto3" json:"imageURL,omitempty"`
	ImageHash string `protobuf:"bytes,5,opt,name=imageHash,proto3" json:"imageHash,omitempty"`
<<<<<<< HEAD
	Status    string `protobuf:"bytes,6,opt,name=status,proto3" json:"status,omitempty"`
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}

func (m *Completion) Reset()         { *m = Completion{} }
func (m *Completion) String() string { return proto.CompactTextString(m) }
func (*Completion) ProtoMessage()    {}
func (*Completion) Descriptor() ([]byte, []int) {
	return fileDescriptor_a93a2621a66fb70d, []int{0}
}
func (m *Completion) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *Completion) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_Completion.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *Completion) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Completion.Merge(m, src)
}
func (m *Completion) XXX_Size() int {
	return m.Size()
}
func (m *Completion) XXX_DiscardUnknown() {
	xxx_messageInfo_Completion.DiscardUnknown(m)
}

var xxx_messageInfo_Completion proto.InternalMessageInfo

func (m *Completion) GetCreator() string {
	if m != nil {
		return m.Creator
	}
	return ""
}

func (m *Completion) GetId() uint64 {
	if m != nil {
		return m.Id
	}
	return 0
}

func (m *Completion) GetTaskID() int32 {
	if m != nil {
		return m.TaskID
	}
	return 0
}

func (m *Completion) GetImageURL() string {
	if m != nil {
		return m.ImageURL
	}
	return ""
}

func (m *Completion) GetImageHash() string {
	if m != nil {
		return m.ImageHash
	}
	return ""
}

<<<<<<< HEAD
func (m *Completion) GetStatus() string {
	if m != nil {
		return m.Status
	}
	return ""
}

=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
func init() {
	proto.RegisterType((*Completion)(nil), "blockchaingroup2.helpinghand.helpinghand.Completion")
}

func init() { proto.RegisterFile("helpinghand/completion.proto", fileDescriptor_a93a2621a66fb70d) }

var fileDescriptor_a93a2621a66fb70d = []byte{
<<<<<<< HEAD
	// 266 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x5c, 0x90, 0x31, 0x4e, 0xc3, 0x30,
	0x18, 0x85, 0xe3, 0xd0, 0x06, 0xea, 0x81, 0xc1, 0x42, 0xc8, 0xaa, 0x2a, 0x2b, 0x62, 0xca, 0x94,
	0x48, 0x70, 0x83, 0xc2, 0x00, 0x12, 0x53, 0x24, 0x16, 0xc4, 0xe2, 0x24, 0x96, 0x63, 0x35, 0xb5,
	0xad, 0xf8, 0x8f, 0x80, 0x5b, 0x70, 0x04, 0x8e, 0xc3, 0xd8, 0x91, 0x11, 0x25, 0x17, 0x41, 0x35,
	0xa5, 0x84, 0x6e, 0xef, 0xfb, 0xdf, 0xff, 0xde, 0xf0, 0xf0, 0xa2, 0x16, 0x8d, 0x55, 0x5a, 0xd6,
	0x5c, 0x57, 0x59, 0x69, 0xd6, 0xb6, 0x11, 0xa0, 0x8c, 0x4e, 0x6d, 0x6b, 0xc0, 0x90, 0xa4, 0x68,
	0x4c, 0xb9, 0x2a, 0x6b, 0xae, 0xb4, 0x6c, 0x4d, 0x67, 0x2f, 0xd3, 0xd1, 0xfb, 0x58, 0xcf, 0xcf,
	0xa4, 0x91, 0xc6, 0x87, 0xb2, 0xad, 0xfa, 0xc9, 0x5f, 0xbc, 0x23, 0x8c, 0xaf, 0xf7, 0xa5, 0x84,
	0xe2, 0xe3, 0xb2, 0x15, 0x1c, 0x4c, 0x4b, 0x51, 0x8c, 0x92, 0x59, 0xfe, 0x8b, 0xe4, 0x14, 0x87,
	0xaa, 0xa2, 0x61, 0x8c, 0x92, 0x49, 0x1e, 0xaa, 0x8a, 0x9c, 0xe3, 0x08, 0xb8, 0x5b, 0xdd, 0xdd,
	0xd0, 0xa3, 0x18, 0x25, 0xd3, 0x7c, 0x47, 0x64, 0x8e, 0x4f, 0xd4, 0x9a, 0x4b, 0xf1, 0x90, 0xdf,
	0xd3, 0x89, 0xaf, 0xd8, 0x33, 0x59, 0xe0, 0x99, 0xd7, 0xb7, 0xdc, 0xd5, 0x74, 0xea, 0xcd, 0xbf,
	0xc3, 0xb6, 0xd1, 0x01, 0x87, 0xce, 0xd1, 0xc8, 0x5b, 0x3b, 0x5a, 0x3e, 0x7d, 0xf4, 0x0c, 0x6d,
	0x7a, 0x86, 0xbe, 0x7a, 0x86, 0xde, 0x06, 0x16, 0x6c, 0x06, 0x16, 0x7c, 0x0e, 0x2c, 0x78, 0x5c,
	0x4a, 0x05, 0x0d, 0x2f, 0xd2, 0x0e, 0x9e, 0x85, 0x06, 0x91, 0xea, 0x26, 0x3b, 0x9c, 0x23, 0x1b,
	0xaf, 0xf7, 0xf2, 0x8f, 0xe0, 0xd5, 0x0a, 0x57, 0x44, 0x7e, 0x87, 0xab, 0xef, 0x00, 0x00, 0x00,
	0xff, 0xff, 0xf5, 0xe5, 0x84, 0x93, 0x67, 0x01, 0x00, 0x00,
=======
	// 252 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0xc9, 0x48, 0xcd, 0x29,
	0xc8, 0xcc, 0x4b, 0xcf, 0x48, 0xcc, 0x4b, 0xd1, 0x4f, 0xce, 0xcf, 0x2d, 0xc8, 0x49, 0x2d, 0xc9,
	0xcc, 0xcf, 0xd3, 0x2b, 0x28, 0xca, 0x2f, 0xc9, 0x17, 0xd2, 0x48, 0xca, 0xc9, 0x4f, 0xce, 0x4e,
	0xce, 0x48, 0xcc, 0xcc, 0x4b, 0x2f, 0xca, 0x2f, 0x2d, 0x30, 0xd2, 0x43, 0x52, 0x8e, 0xcc, 0x96,
	0x12, 0x49, 0xcf, 0x4f, 0xcf, 0x07, 0x6b, 0xd2, 0x07, 0xb1, 0x20, 0xfa, 0x95, 0x3a, 0x18, 0xb9,
	0xb8, 0x9c, 0xe1, 0x86, 0x0a, 0x49, 0x70, 0xb1, 0x27, 0x17, 0xa5, 0x26, 0x96, 0xe4, 0x17, 0x49,
	0x30, 0x2a, 0x30, 0x6a, 0x70, 0x06, 0xc1, 0xb8, 0x42, 0x7c, 0x5c, 0x4c, 0x99, 0x29, 0x12, 0x4c,
	0x0a, 0x8c, 0x1a, 0x2c, 0x41, 0x4c, 0x99, 0x29, 0x42, 0x62, 0x5c, 0x6c, 0x25, 0x89, 0xc5, 0xd9,
	0x9e, 0x2e, 0x12, 0xcc, 0x0a, 0x8c, 0x1a, 0xac, 0x41, 0x50, 0x9e, 0x90, 0x14, 0x17, 0x47, 0x66,
	0x6e, 0x62, 0x7a, 0x6a, 0x68, 0x90, 0x8f, 0x04, 0x0b, 0xd8, 0x08, 0x38, 0x5f, 0x48, 0x86, 0x8b,
	0x13, 0xcc, 0xf6, 0x48, 0x2c, 0xce, 0x90, 0x60, 0x05, 0x4b, 0x22, 0x04, 0x9c, 0x62, 0x4e, 0x3c,
	0x92, 0x63, 0xbc, 0xf0, 0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e,
	0x3c, 0x96, 0x63, 0xb8, 0xf1, 0x58, 0x8e, 0x21, 0xca, 0x29, 0x3d, 0xb3, 0x24, 0x27, 0x31, 0x49,
	0xaf, 0xb4, 0xa4, 0x3c, 0x35, 0xaf, 0x24, 0x55, 0x2f, 0x2f, 0x47, 0x1f, 0xdd, 0xdb, 0xfa, 0xc8,
	0xa1, 0x54, 0x81, 0xc2, 0x2b, 0xa9, 0x2c, 0x48, 0x2d, 0x4e, 0x62, 0x03, 0xfb, 0xd7, 0x18, 0x10,
	0x00, 0x00, 0xff, 0xff, 0x21, 0xeb, 0x9b, 0x33, 0x4f, 0x01, 0x00, 0x00,
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
}

func (m *Completion) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *Completion) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *Completion) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
<<<<<<< HEAD
	if len(m.Status) > 0 {
		i -= len(m.Status)
		copy(dAtA[i:], m.Status)
		i = encodeVarintCompletion(dAtA, i, uint64(len(m.Status)))
		i--
		dAtA[i] = 0x32
	}
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
	if len(m.ImageHash) > 0 {
		i -= len(m.ImageHash)
		copy(dAtA[i:], m.ImageHash)
		i = encodeVarintCompletion(dAtA, i, uint64(len(m.ImageHash)))
		i--
		dAtA[i] = 0x2a
	}
	if len(m.ImageURL) > 0 {
		i -= len(m.ImageURL)
		copy(dAtA[i:], m.ImageURL)
		i = encodeVarintCompletion(dAtA, i, uint64(len(m.ImageURL)))
		i--
		dAtA[i] = 0x22
	}
	if m.TaskID != 0 {
		i = encodeVarintCompletion(dAtA, i, uint64(m.TaskID))
		i--
		dAtA[i] = 0x18
	}
	if m.Id != 0 {
		i = encodeVarintCompletion(dAtA, i, uint64(m.Id))
		i--
		dAtA[i] = 0x10
	}
	if len(m.Creator) > 0 {
		i -= len(m.Creator)
		copy(dAtA[i:], m.Creator)
		i = encodeVarintCompletion(dAtA, i, uint64(len(m.Creator)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func encodeVarintCompletion(dAtA []byte, offset int, v uint64) int {
	offset -= sovCompletion(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *Completion) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Creator)
	if l > 0 {
		n += 1 + l + sovCompletion(uint64(l))
	}
	if m.Id != 0 {
		n += 1 + sovCompletion(uint64(m.Id))
	}
	if m.TaskID != 0 {
		n += 1 + sovCompletion(uint64(m.TaskID))
	}
	l = len(m.ImageURL)
	if l > 0 {
		n += 1 + l + sovCompletion(uint64(l))
	}
	l = len(m.ImageHash)
	if l > 0 {
		n += 1 + l + sovCompletion(uint64(l))
	}
<<<<<<< HEAD
	l = len(m.Status)
	if l > 0 {
		n += 1 + l + sovCompletion(uint64(l))
	}
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
	return n
}

func sovCompletion(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozCompletion(x uint64) (n int) {
	return sovCompletion(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *Completion) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowCompletion
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: Completion: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: Completion: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Creator", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCompletion
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCompletion
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Creator = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Id", wireType)
			}
			m.Id = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Id |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 3:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field TaskID", wireType)
			}
			m.TaskID = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.TaskID |= int32(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		case 4:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ImageURL", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCompletion
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCompletion
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ImageURL = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 5:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field ImageHash", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCompletion
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCompletion
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.ImageHash = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
<<<<<<< HEAD
		case 6:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthCompletion
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthCompletion
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Status = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
=======
>>>>>>> 61813646a87504babfb5036c42bad1a17a2c4b04
		default:
			iNdEx = preIndex
			skippy, err := skipCompletion(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthCompletion
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipCompletion(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowCompletion
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowCompletion
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthCompletion
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupCompletion
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthCompletion
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthCompletion        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowCompletion          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupCompletion = fmt.Errorf("proto: unexpected end of group")
)
